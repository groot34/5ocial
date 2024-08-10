"use client";
//import { Form } from "../ui/form"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreadValidation } from "@/lib/validations/thread";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";

import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";

import { usePathname, useRouter } from "next/navigation";
import { createThread } from "@/lib/actions/thread.action";


interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof ThreadValidation>>({resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  const onSubmit=async(values: z.infer<typeof ThreadValidation>)=>{
   await createThread({
    text:values.thread,
     author:userId, 
     communityId:null,
      path:pathname
   });

   router.push('/');
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10 mt-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >

<FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Content
              </FormLabel>
              <FormControl className="no-focus border-dark-4 bg-dark-3 text-light-1 ">
                <Textarea
                  rows={15}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500">Post Thread</Button>
      </form>
    </Form>
  );
}

export default PostThread;
