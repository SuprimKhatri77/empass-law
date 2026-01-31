"use server";

import { db } from "@/db";
import { blogs } from "@/db/schema";
import { generateUniqueSlug } from "@/helpers/slug/generate-unique-slug";
import { auth } from "@/utils/auth/auth";
import {
  CreateBlog,
  CreateBlogResponse,
  createBlogSchema,
} from "@/utils/validators/blog.validator";
import { nanoid } from "nanoid";
import { headers } from "next/headers";
import z from "zod";

export async function createBlog(
  data: CreateBlog,
): Promise<CreateBlogResponse> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "admin") {
    return {
      success: false,
      message: "Not authorized to perform this action.",
    };
  }

  const validateFields = createBlogSchema.safeParse(data);
  if (!validateFields.success) {
    const tree = z.treeifyError(validateFields.error).properties;
    return {
      success: false,
      message: "Validation failed.",
      errors: {
        properties: {
          title: tree?.title?.errors,
          description: tree?.description?.errors,
          images: tree?.images?.errors,
        },
      },
    };
  }
  const id = nanoid(7);
  const slug = await generateUniqueSlug(data.title, id);
  const { title, description, images } = validateFields.data;
  try {
    await db
      .insert(blogs)
      .values({
        title,
        description,
        images,
        authorId: session.user.id,
        id,
        slug,
      });
    return { success: true, message: "Blog created successfully." };
  } catch (error) {
    console.log("error: ", error);
    return { success: false, message: "Failed to create blog." };
  }
}
