import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <section class="bg-blue-950 pt-5 pb-14">
      <div class="text-center pb-10">
        <h2 class="font-bold text-red-800">Me contacter</h2>
      </div>
      <div class="flex content-center justify-center items-center">
        <div class="bg-white shadow-lg max-w-full md:flex">
          <div class="flex-1">
            <Image src='/20547283_6310505.svg' class="w-full h-40 object-cover md:h-full" alt='illustration' width='300' height='400'/>
          </div>
          <div class="p-4 flex-1 md:flex md:flex-col justify-center">
            <h1 class="text-2xl font-bold tex-gray-800 mb-2 self-center">
              Me contacter
            </h1>
            <div class="mb-4 flex">
              <div class="mr-2">
                  <label for="nom" class="block text-gray-600 mb-2">Votre nom</label>
              <input type="text" name="nom" id="nom" class="border shadow-inner px-3 py-2 text-gray-700 w-full focus:shadow-outline"/>
              </div>
              <div>
                  <label for="prenom" class="block text-gray-600 mb-2">Votre prénom</label>
              <input type="text" name="prenom" id="prenom" class="border shadow-inner px-3 py-2 text-gray-700 w-full focus:shadow-outline"/>
              </div>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-600 mb-2">Votre email</label>
              <input type="email" name="email" id="email" class="border shadow-inner px-3 py-2 text-gray-700 w-full focus:shadow-outline"/>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-600 mb-2">Votre message</label>
              <textarea name="message" id="message" cols="30" rows="4" class="border shadow-inner px-3 py-2 text-gray-700 w-full focus:shadow-outline"></textarea>
            </div>
            <button type="submit" class="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-950">Envoyer</button>
          </div>
        </div> 
      </div>
    </section>
  )
}