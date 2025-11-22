type BlogPageProps = {
    params: Promise<{
        id: string; // URL params are always strings, not numbers
    }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
    // In Next.js 15, you must await params before using them
    const { id } = await params; 
    
    return <div> The Blog Post ID Is: {id}</div>;
}