'use client';
import { signUp, SignupActionResponse } from '@/actions/auth/auth';
import Logo from '@/components/logo/logo';
import Label from '@/components/ui/label';
import { CircleX } from 'lucide-react';
import Link from 'next/link';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUp, signupSchema } from '@/lib/schema/auth.schema';
import { useRouter } from 'next/navigation';

const initialState: SignupActionResponse = {
  success: false,
  message: '',
}

export default function SignUpForm() {
  const router = useRouter();
  const [states, formAction, isPending] = useActionState(signUp, initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    mode: 'onChange',
    resolver: zodResolver(signupSchema),
    defaultValues: states.fields || {
      name: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignUp) => {
    startTransition(() => {
      formAction(data);
    })
  };

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

        <h1 className="mb-6 text-xl font-medium">Create your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="number">Phone Number</Label>
            <input
              id="number"
              {...register('number')}
              className={errors.number ? 'border-red-500' : ''}
            />
            {errors.number && <p className='text-red-500 text-sm'>{errors.number.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              className={errors.confirmPassword ? 'border-red-500' : ''}
            />
            {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>}
          </div>
          {(!states.success && states.message) && (
            <div className='border rounded-sm p-2'>
              <p className='text-red-500 flex gap-3 text-center'><CircleX />{states.message}</p>
            </div>
          )}
          <button
            type="submit"
            className="primary-btn w-full rounded-md disabled:cursor-not-allowed"
            disabled={isPending}
          >
            Sign Up
          </button>
        </form>
        <p className="my-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-highlight hover:text-highlight-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
