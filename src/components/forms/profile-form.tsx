'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '../ui/form'

type Props = {}

function ProfileForm(props: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })
    return <Form {...form}>
        <form
            className="flex flex-col gap-6"
            onSubmit={() => { }}
        >
            <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
            />
        </form>
    </Form>
}

export default ProfileForm