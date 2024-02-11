'use client'
import React, { useState } from "react";
import Footer from "./components/Footer";
import Spline from '@splinetool/react-spline';
import RouteIntro from "./components/RouteIntro";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow relative">
        <Spline
          scene="https://prod.spline.design/xqt9kHIXWASrN1NJ/scene.splinecode"
          className="w-full h-full"
        />

      </div>
            <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Explore the City with a Local Expert
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover hidden gems and local favorites with a personalized tour led by a knowledgeable local guide.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 min-[400px]:flex-row">
                <Input className="max-w-md" placeholder="Enter a destination" type="text" />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top-Rated Guides</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the local experts who will make your tour unforgettable.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Sarah Thompson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An art historian who offers insightful museum tours and knows all the best galleries in the city.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">James Lee</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A nature enthusiast who leads hiking expeditions and bird watching tours.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Elena Garcia</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A food and wine expert who organizes culinary walking tours and wine tasting experiences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mark Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A history buff who conducts heritage walks and ghost tours of the old town.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are the top-rated tour and guide service in the city. Here are some reasons why you should choose us:
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Local Experts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our guides are knowledgeable locals who provide unique insights into the city's culture and history.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customized Tours</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer personalized tours tailored to your interests, ensuring a memorable experience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Exceptional Service</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team is dedicated to providing exceptional service and ensuring your satisfaction throughout your
                  tour.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Variety of Options</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose from a wide range of tours and activities, from cultural experiences to outdoor adventures.
                </p>
              </div>
            </div>
          </div>
        </section>
      <footer className="mt-auto">
        <Footer />
      </footer> 

    </div>
  );
}
