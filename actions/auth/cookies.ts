"use server";
import { validateSessionToken } from "@/lib/auth";
import { Session, User } from "@prisma/client";
import { cookies } from "next/headers";
import { cache } from 'react';

export async function setSessionCookie(token: string, expiresAt: Date): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    path: '/',
  });
}

export async function removeSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('session', '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
  });
}

type UserSession =
  | {
    session: null;
    user: null;
  }
  | {
    session: Session;
    user: Omit<User, 'password'>;
  }

export const getCurrentSession = cache(async (): Promise<UserSession> => {
  const token = (await cookies()).get('session')?.value ?? null;
  if (token === null) {
    return { session: null, user: null };
  }
  const { user, session } = await validateSessionToken(token);

  if (user === null || session === null) {
    return { session: null, user: null };
  }
  const returnValue: UserSession = {
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
      number: user.number,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    session
  }
  return returnValue;
});
