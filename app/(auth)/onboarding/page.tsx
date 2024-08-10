import AccountProfile from '@/components/forms/AccountProfile'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.action';

async function page(){
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");



  const userData={
    id:user?.id,
    objectId:userInfo?._id,
    username:userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  }

  //console.log("CuuuuuuuuurrentUser", user);
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
        <h1 className='head-text'>OnBoarding</h1>
        <p className='mt-3 text-base-regular text-light-2'>Complete the profile Now to use 5ocial</p>

        <section className='mt-9 bg-dark-2 p-10'>
          <AccountProfile user={userData} btnTitle="Continue"/>
        </section>
    </main>
  )
}

export default page