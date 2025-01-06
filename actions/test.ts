"use server";

import axios from "axios";

export async function testAction(formData: FormData) {
  console.log(Object.fromEntries(formData.entries()));
}

export async function uploadImage(formData: FormData) {
  // console.log(formData.get("image") as File);
  const image = formData.get("image") as File;
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const api = process.env.IMG_HIPPO_API as string;
  const api_key = process.env.IMG_HIPPO_API_KEY as string;
  // console.log({ api_key, api });
  formData.append("api_key", api_key);
  const req = await axios.post(api, formData);
  console.log(req.data);
}
