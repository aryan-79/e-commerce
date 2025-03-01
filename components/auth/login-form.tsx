'use client';
import { login, LoginActionResponse } from '@/actions/auth/auth';
import Logo from '@/components/logo/logo';
import Label from '@/components/ui/label';
import { Login, loginSchema } from '@/lib/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleX } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const initialValues: LoginActionResponse = {
  success: false,
  message: '',
}

export default function LoginForm() {
  const router = useRouter();
  const [states, action, isPending] = useActionState(login, initialValues);

  const { register, handleSubmit, formState: { errors } } = useForm<Login>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: states.fields
  });

  const onSubmit = (data: Login) => {
    startTransition(() => {
      action(data)
    })
  }

  useEffect(() => {
    if (!isPending && states.success) {
      router.replace(states.redirectTo ?? '/');
    };
  }, [router, isPending, states]);
  return (
    <div className="flex h-screen items-center justify-center bg-[#f9fafb]">
      <div className="flex min-h-[450px] w-full max-w-[500px] flex-col justify-center rounded-lg bg-white p-6 shadow-xl">
        <div className="blob mx-auto mb-8 grid h-16 w-20 place-items-center">
          <Logo size={28} />
        </div>
        <h1 className="mb-6 text-xl font-medium">Sign in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <input type="text" id="email" {...register('email')} />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <input type="password" id="password" {...register('password')} />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>
          {(!states.success && states.message) && (
            <div className='border rounded-sm p-2'>
              <p className='text-red-500 flex gap-3 text-center'><CircleX />{states.message}</p>
            </div>
          )}
          <button disabled={isPending} type="submit" className="primary-btn w-full rounded-md">
            Login
          </button>
        </form>
        <p className="my-6 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="hover:text-highlight-800 text-highlight"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
