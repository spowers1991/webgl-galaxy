import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.jpg'
import SunSurfaceTexture2 from '@/assets/T_SunSurfaceTexture_2.jpg'
import SunSurfaceTexture3 from '@/assets/T_SunSurfaceTexture_3.jpg'

export function getStarTextures( type: String ) {

     // Array of Sun surface texture URLs
     const KSurfaceTextures = [
        SunSurfaceTexture, 
        SunSurfaceTexture2, 
        SunSurfaceTexture3
    ];

    const MSurfaceTextures = [
        SunSurfaceTexture,  
        SunSurfaceTexture3
    ];

    if ( type === "K") {
            const randomTexture = KSurfaceTextures[Math.floor(Math.random() * KSurfaceTextures.length)];
        return randomTexture;
    }
    
    if ( type === "M") {
            const randomTexture = MSurfaceTextures[Math.floor(Math.random() * MSurfaceTextures.length)];
        return randomTexture;
    }
}
