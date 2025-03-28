import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.webp'
import SunSurfaceTexture2 from '@/assets/T_SunSurfaceTexture_2.webp'
import SunSurfaceTexture3 from '@/assets/T_SunSurfaceTexture_3.webp'
import SunSurfaceTexture4 from '@/assets/T_SunSurfaceTexture_4.webp'
import SunSurfaceTexture8 from '@/assets/T_SunSurfaceTexture_8.webp'
import SunSurfaceTexture9 from '@/assets/T_SunSurfaceTexture_9.webp'
import SunSurfaceTexture10 from '@/assets/T_SunSurfaceTexture_10.webp'
import SunSurfaceTexture11 from '@/assets/T_SunSurfaceTexture_11.webp'
import SunSurfaceTexture12 from '@/assets/T_SunSurfaceTexture_12.webp'
import SunSurfaceTexture13 from '@/assets/SunSurfaceTexture_13.webp'
import SunSurfaceTexture14 from '@/assets/T_SunSurfaceTexture_14.webp'
import SunSurfaceTexture15 from '@/assets/T_SunSurfaceTexture_15.webp'
import SunSurfaceTexture16 from '@/assets/T_SunSurfaceTexture_16.webp'
import SunSurfaceTexture18 from '@/assets/T_SunSurfaceTexture_18.webp'
import SunSurfaceTexture19 from '@/assets/T_SunSurfaceTexture_19.webp'

export function getStarTextures( type: String , diameter: number) {

     // Array of Sun surface texture URLs
     const KSurfaceTextures = [
        SunSurfaceTexture, 
        SunSurfaceTexture2, 
        SunSurfaceTexture3,
        SunSurfaceTexture4,
        SunSurfaceTexture11,
        SunSurfaceTexture12,
    ];

    const MGiantSurfaceTextures = [
        //SunSurfaceTexture4,
        SunSurfaceTexture8,
        SunSurfaceTexture9,
        SunSurfaceTexture10,
        SunSurfaceTexture13,
        //SunSurfaceTexture14
    ];

    const MDwarfSurfaceTextures = [
      SunSurfaceTexture,  
      SunSurfaceTexture18
    ];

    const GSurfaceTextures = [
        SunSurfaceTexture16, 
        SunSurfaceTexture19
    ]

    const BSurfaceTextures = [
        SunSurfaceTexture15, 
    ]

    if ( type === "K") {
            const randomTexture = KSurfaceTextures[Math.floor(Math.random() * KSurfaceTextures.length)];
        return randomTexture;
    }
    
    if ( type === "M") {
        if( diameter > 2 ) { 
                const randomTexture = MGiantSurfaceTextures[Math.floor(Math.random() * MGiantSurfaceTextures.length)];
            return randomTexture;
        } else {
                const randomTexture = MDwarfSurfaceTextures[Math.floor(Math.random() * MDwarfSurfaceTextures.length)];
            return randomTexture;
        }
    }

    if( type === "G" ){
        const randomTexture = GSurfaceTextures[Math.floor(Math.random() * GSurfaceTextures.length)];
            return randomTexture;
    }

    if( type === "B" ){
        const randomTexture = BSurfaceTextures[Math.floor(Math.random() * BSurfaceTextures.length)];
            return randomTexture;
    }

    else {
        return SunSurfaceTexture2
    }
}
