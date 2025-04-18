"use client"
export default function Cards() {
    return (
        <>
            <div className="container my-5">
                <div className="row g-4"> {/* Added g-4 class for spacing between cards */}
                <div className="my-4 px-3">
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h1 className="fw-bold mb-3 mb-sm-0">Explore Our Insights</h1>
        <div className="d-flex justify-content-center gap-3">
            <button className="btn" style={{ backgroundColor: 'rgb(45, 194, 158)', color: 'white', borderRadius: '50px', padding: '12px 25px', border: 'none', fontSize: '16px' }}>All</button>
            <button className="btn btn-white rounded-5" style={{ border: '1px solid #ddd', backgroundColor: 'white', borderRadius: '50px', padding: '12px 25px', fontSize: '16px' }}>Team Work</button>
            <button className="btn btn-white rounded-5" style={{ border: '1px solid #ddd', backgroundColor: 'white', borderRadius: '50px', padding: '12px 25px', fontSize: '16px' }}>Hiring Tips</button>
            <button className="btn btn-white rounded-5" style={{ border: '1px solid #ddd', backgroundColor: 'white', borderRadius: '50px', padding: '12px 25px', fontSize: '16px' }}>Trending</button>
        </div>
    </div>
    <hr className="my-4" />
</div>



                    {/* Card 1 */}
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/icons.png" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')} // You can handle the click as needed
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/react.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                       
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/sky.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/shadow.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/icons.png" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/samsung.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/icons.png" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/laptoptree.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/white.png" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/screen.jpg" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card border p-3 shadow-lg" style={{ borderRadius: '30px' }}>
                            <img src="/blog/icons.png" alt="" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }} />
                            <h3 className="mt-3">React useEffect and useState — Easy Guide</h3>
                            <p className="mt-2">Hey there, fellow React lovers! Have you ever wondered how to make your React components...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div
                                    className="learn-more"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                
                                        padding: '0',
                                    }}
                                    onClick={() => alert('Learn more clicked!')}
                                >
                                    Learn more <img src="/blog/arrow-icon.svg" alt="" style={{ marginLeft: '8px' }} />
                                </div>
                                <h3>14 April 2025</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
