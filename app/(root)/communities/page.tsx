import CommunityCard from "@/components/cards/CommunityCard";
import UserCard from "@/components/cards/UserCard";


import { profileTabs } from "@/constants";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUser, fetchUsers } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";

import Image from "next/image";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo.onboarded) redirect("/onboarding");

  //Fetch Users
  const result = await fetchCommunities({
    searchString:'',
    pageNumber:1,
    pageSize:25
  })
  return (
    <section>
       

<div className="mt-14 grid gap-9 items-center justify-center 
                grid-cols-1  lg:grid-cols-2">
    {result.communities.length === 0 ? (
        <p className="no-result">No Communities</p>
    ) : (
        <>
            {result.communities.map((community) => (
                <CommunityCard
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    username={community.username}
                    imgUrl={community.image}
                    bio={community.bio}
                    members={community.members}
                />
            ))}
        </>
    )}
</div>

    </section>
  )
}

export default Page