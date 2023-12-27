// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa sicyocarpa
const Mimosa_sicyocarpa = new Mimosa()
Mimosa_sicyocarpa.specificEpithet = 'sicyocarpa'

Mimosa_sicyocarpa.stems = new Stems()

Mimosa_sicyocarpa.stipule = new Stipule()
Mimosa_sicyocarpa.stipule.margin = new MarginStipule()
Mimosa_sicyocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_sicyocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_sicyocarpa.leaf = new Leaf()
Mimosa_sicyocarpa.leaf.petiole = new Petiole()
Mimosa_sicyocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_sicyocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_sicyocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 5)
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sicyocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sicyocarpa.inflorescence = new Inflorescence()
Mimosa_sicyocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_sicyocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sicyocarpa.flower = new Flower()
Mimosa_sicyocarpa.flower.bracteole = new Bracteole()
Mimosa_sicyocarpa.flower.calyx = new Calyx()
Mimosa_sicyocarpa.flower.calyx.shape = 'campanulate'
Mimosa_sicyocarpa.flower.corolla = new Corolla()

Mimosa_sicyocarpa.androecium = new Androecium()
Mimosa_sicyocarpa.androecium.filaments = new Filaments()

Mimosa_sicyocarpa.ginoecium = new Ginoecium()
Mimosa_sicyocarpa.ginoecium.ovary = new Ovary()

Mimosa_sicyocarpa.fruit = new Fruit()
Mimosa_sicyocarpa.fruit.stipe = new Stipe()
Mimosa_sicyocarpa.fruit.replum = new Replum()
Mimosa_sicyocarpa.fruit.epicarp = new Epicarp()

Mimosa_sicyocarpa.seed = new Seed()


// Description authorship
Mimosa_sicyocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sicyocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa sicyocarpa
export { Mimosa_sicyocarpa }