import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.jpg'
import SunSurfaceTexture2 from '@/assets/T_SunSurfaceTexture_2.jpg'
import SunSurfaceTexture3 from '@/assets/T_SunSurfaceTexture_3.jpg'
import SunSurfaceTexture4 from '@/assets/T_SunSurfaceTexture_4.jpg'
import SunSurfaceTexture6 from '@/assets/T_SunSurfaceTexture_6.jpg'
import SunSurfaceTexture8 from '@/assets/T_SunSurfaceTexture_8.jpg'
import SunSurfaceTexture9 from '@/assets/T_SunSurfaceTexture_9.jpg'
import SunSurfaceTexture10 from '@/assets/T_SunSurfaceTexture_10.jpg'

export function getStarTextures( type: String , diameter: number) {

     // Array of Sun surface texture URLs
     const KSurfaceTextures = [
        SunSurfaceTexture, 
        SunSurfaceTexture2, 
        SunSurfaceTexture3,
        SunSurfaceTexture4,
    ];

    const MGiantSurfaceTextures = [
        SunSurfaceTexture4,
        SunSurfaceTexture8,
        SunSurfaceTexture9,
        SunSurfaceTexture10
    ];

    const MDwarfSurfaceTextures = [
        SunSurfaceTexture,  
        SunSurfaceTexture6
    ];

    if ( type === "K") {
            const randomTexture = KSurfaceTextures[Math.floor(Math.random() * KSurfaceTextures.length)];
        return randomTexture;
    }
    
    if ( type === "M") {
        if( diameter > 2.3 ) { 
                const randomTexture = MGiantSurfaceTextures[Math.floor(Math.random() * MGiantSurfaceTextures.length)];
            return randomTexture;
        } else {
                const randomTexture = MDwarfSurfaceTextures[Math.floor(Math.random() * MDwarfSurfaceTextures.length)];
            return randomTexture;
        }
    }

    else {
        return SunSurfaceTexture2
    }
}
