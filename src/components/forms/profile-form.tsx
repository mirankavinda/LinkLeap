'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResover } from '@hookform/resolvers/zod'

type Props = {}

function ProfileForm(props: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResover(EditUserProfileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
        },
    })
    return <div>ProfileForn</div>
}

export default ProfileForm