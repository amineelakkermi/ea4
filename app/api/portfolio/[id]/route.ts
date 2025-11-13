import { Project } from "@/database"
import connectDB from "@/lib/mongodb"
import { NextRequest, NextResponse } from "next/server"




export async function GET(req: NextRequest, context: { params?: { id?: string } }) {
  try {
    await connectDB();

    // 🧩 جلب الـ id: داخلي من params أو خارجي من URL
    const id = req.nextUrl.pathname.split('/').pop();


    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project fetched successfully', project }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: 'Error fetching project',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    );
  }
}  


export async function DELETE(req: NextRequest, context: { params?: { id?: string } }) {
  try {
    await connectDB();

    // Récupérer l'ID depuis query param
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    // Vérifier si le projet existe
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Supprimer le projet
    await Project.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Project deleted successfully", id },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      {
        message: "Failed to delete project",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
