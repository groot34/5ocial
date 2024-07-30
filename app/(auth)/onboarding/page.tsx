import AccountProfile from '@/components/forms/AccountProfile'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

async function page(){
  const user = await currentUser();

  const userInfo={};

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