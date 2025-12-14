// A lightweight, horizontal scrolling slider
export default function ImageSlider({ images }) {
    return (
        <div style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '10px',
            paddingBottom: '20px', // space for scrollbar
            scrollbarWidth: 'none' // Hide scrollbar Firefox
        }} className="hide-scroll">

            {images.map((src, index) => (
                <div key={index} style={{
                    flex: '0 0 85%', // Shows part of next image to encourage scroll
                    height: '400px',
                    scrollSnapAlign: 'center',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <img
                        src={src}
                        alt="Slide"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            ))}

            {/* Hide Scrollbar Style for Chrome/Safari */}
            <style jsx>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}</style>
        </div>
    );
}