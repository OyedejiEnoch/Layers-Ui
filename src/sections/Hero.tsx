'use client'
import Button from "@/components/Button";
import designExample1Img from '@/assets/images/design-example-1.png'
import designExample2Img from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";
import {motion, useAnimate} from 'framer-motion'
import { useEffect } from "react";
import coursorYouImage from '@/assets/images/cursor-you.svg'

export default function Hero() {

    const [leftDesignScope, leftDesignAnimate]=useAnimate();
    const [leftPointerScope, leftPointerAnimate]=useAnimate();
    const [rightDesignScope, rightDesignAnimate]=useAnimate();
    const [rightPointerScope, rightPointerAnimate]=useAnimate();

    useEffect(()=>{
        leftDesignAnimate([
            [leftDesignScope.current, {opacity:1}, {duration:0.5}],
            [leftDesignScope.current, {y:0, x:0}, {duration:0.5}]
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, {opacity:1}, {duration:0.5}],
            [leftPointerScope.current, {y:0, x:-100}, {duration:0.5}],
            [leftPointerScope.current, {x:0, y:[0,16,0]}, {duration:0.5, ease:'easeInOut'}]
        ])

        rightDesignAnimate([
            [rightDesignScope.current, {opacity:1}, {duration:0.5, delay:1.5}],
            [rightDesignScope.current, {x:0, y:0}, {duration:0.5,}]
        ])

        rightPointerAnimate([
            [rightPointerScope.current, {opacity:1}, {duration:0.5, delay:1.5}],
            [rightPointerScope.current, {x:175, y:0}, {duration:0.5}],
            [rightPointerScope.current, {x:0, y:[0,20,0]}, {duration:0.5}]
        ])
    }, [leftDesignAnimate,leftPointerAnimate,rightDesignAnimate,rightPointerAnimate])

    return <section className="py-24 overflow-x-clip" style={{cursor:`url(${coursorYouImage.src}), auto`}}>
        <div className="container relative">
            <motion.div 
            initial={{opacity:0, y:100, x:-100}}
            drag
            ref={leftDesignScope} className="hidden lg:block absolute -left-44 top-16">
                <Image 
                draggable='false'
                src={designExample1Img} alt="Design-example-1-image" />
            </motion.div>

            <motion.div 
            initial={{
                opacity:0,
                y:100,
                x:-200
            }}
            ref={leftPointerScope} className="hidden lg:block absolute left-56 top-96">
                <Pointer name="Enoch" />
            </motion.div>

            {/* Right img & pointer */}
            <motion.div 
            initial={{
                opacity:0,
                x:100,
                y:100
            }}
            drag
            ref={rightDesignScope}
            className="hidden lg:block absolute -right-64 -top-16">
                <Image 
                draggable='false'
                src={designExample2Img} alt="Design-example-2-image" />
            </motion.div>

            <motion.div 
            initial={{
                opacity:0,
                x:275,
                y:100
            }}
            ref={rightPointerScope}
            className="hidden lg:block absolute right-80 -top-6">
                <Pointer name="Andrea" color="red" />
            </motion.div>

            <div className="flex justify-center">
                <div className="inline-flex py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full
                text-neutral-900 font-semibold">✨ $7.5M seed round raised </div>
             </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
            <p className="text-center max-w-2xl text-white/50 text-xl mt-8 mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in 
                your creative flow
            </p>

            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full" />
                <Button variant="primary" type="submit" className="whitespace-nowrap" size="sm">SignUp</Button>
            </form>
        </div>
    </section>;
}
