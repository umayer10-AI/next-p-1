import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {

  const id = '01'

  return redirect(`/cart/${id}`)
};

export default page;