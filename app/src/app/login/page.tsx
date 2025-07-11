'use client'

import Logo from "@/components/Logo"
import { useLoginStore } from "@/store/loginStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Login(){

    const router = useRouter()

    const {
        username, 
        password,
        token,
        setUsername,
        setPassword,
        getToken,
    } = useLoginStore()

    useEffect(()=> {
        if(token != ''){
            localStorage.setItem('token', token)
            localStorage.setItem('user', username)
            router.push('/home')
        }
    }, [token])


    return(
        <div className="bg-[#1C1C1C] w-screen h-screen flex justify-between">

            <div className="w-[50%] flex flex-col items-center justify-center">   
                <div className="w-[50%] flex flex-col items-center">
                    <div className="mb-16 flex flex-col items-center">
                        <Logo/>
                        <h2 className="text-5xl font-medium text-[#D0D0D0]">Login to your Account</h2>
                    </div>


                    <div className="w-full flex flex-col gap-y-5">
                        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}  className="bg-[#303030] text-white placeholder:text-[#6B6B6B] placeholder:text-xl w-full rounded py-5 px-5"/>
                        
                        <div className="flex items-end flex-col">
                            <input type="text"  placeholder="password" onChange={e=>setPassword(e.target.value)} className="bg-[#303030] text-white placeholder:text-[#6B6B6B] placeholder:text-xl w-full rounded py-5 px-5"/>
                            <p className="text-[#D7D7D7] underline underline-offset-1 text-lg">Forgot your password?</p>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <button className="bg-linear-to-r from-[#C7A2FD] to-[#F9D2FF] w-full rounded py-4 font-semibold text-xl" onClick={()=>getToken(username, password)}>Sign In</button>
                    </div>
                </div>          
            </div>

            <div className="bg-amber-200 w-[50%] my-3 mr-3 rounded-2xl">
                <img alt="" className="object-cover w-full h-full rounded-2xl"/>
            </div>
        </div>
    )
}

export default Login