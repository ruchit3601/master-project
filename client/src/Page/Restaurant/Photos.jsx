import React, { useState } from 'react'
import ImageViewer from 'react-simple-image-viewer';


//  Component
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/df3cf0d92a5c64f06b2bb7e033e608d4.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/1b882dcd1619f59feca4c34f9fe37709.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/e87df87621f07c315faf2779a766f9c6.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/e77712d11b11088d3b5e2b27734ad677.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/f445d973240fa7066bcb3a47ec9ba60e.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/8fb7b26690a1ada2ae1f8760cdf4b6e7.jpg",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
        {isMenuOpen && (
                <ImageViewer
                src={ photos }
                currentIndex={ CurrentImg }
                disableScroll={ false }
                onClose={ closeViewer }
                />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                    <PhotoCollection 
                        image={photo}
                        openViewer={openViewer}
                    />
                ))}
            </div>
        </>
    );
};

export default Photos
