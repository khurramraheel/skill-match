"use client"

export default function Blog() {
    return (
        <div
            style={{
                backgroundImage: `url(/blog/bg-blog.svg)`,
                height: '40vh', 
                backgroundSize: 'AUTO 40%', 
                backgroundRepeat: 'repeat x', 
                backgroundPosition: 'center', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center', 
                backgroundColor: 'rgb(45 194 158)'

            }}
        >
           <h1 className="text-center text-white font-weight-bold">Blogs</h1>
        </div>
    );
}
