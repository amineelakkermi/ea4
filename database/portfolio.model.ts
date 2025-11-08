import { Schema, model, models, Document } from 'mongoose';

// TypeScript interface for Project document
export interface IProject extends Document {
  title: string;
  slug: string;
  image: string;
  tags: string[];
  href?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Project image is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'At least one tag is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'Project must have at least one tag',
      },
    },
    href: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Pre-save hook for slug generation
ProjectSchema.pre('save', function (next) {
  const project = this as IProject;

  if (project.isModified('title') || project.isNew) {
    project.slug = generateSlug(project.title);
  }

  next();
});

// Helper function for slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .replace(/^-|-$/g, ''); // Trim hyphens
}

// Index for faster lookups
ProjectSchema.index({ slug: 1 }, { unique: true });

const Project = models.Project || model<IProject>('Project', ProjectSchema);

export default Project;
