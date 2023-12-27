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


// Description of Mimosa tarda
const Mimosa_tarda = new Mimosa()
Mimosa_tarda.specificEpithet = 'tarda'

Mimosa_tarda.stems = new Stems()

Mimosa_tarda.stipule = new Stipule()
Mimosa_tarda.stipule.margin = new MarginStipule()
Mimosa_tarda.stipule.adaxial = new AdaxialStipule()
Mimosa_tarda.stipule.abaxial = new AbaxialStipule()

Mimosa_tarda.leaf = new Leaf()
Mimosa_tarda.leaf.petiole = new Petiole()
Mimosa_tarda.leaf.bipinnate = new Bipinnate()
Mimosa_tarda.leaf.bipinnate.rachis = new Rachis()
Mimosa_tarda.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tarda.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tarda.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(9)
Mimosa_tarda.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 17)
Mimosa_tarda.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tarda.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tarda.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tarda.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 15)
Mimosa_tarda.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tarda.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tarda.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tarda.inflorescence = new Inflorescence()
Mimosa_tarda.inflorescence.peduncle = new Peduncle()
Mimosa_tarda.inflorescence.capitate = new CapitateInflorescence()

Mimosa_tarda.flower = new Flower()
Mimosa_tarda.flower.bracteole = new Bracteole()
Mimosa_tarda.flower.calyx = new Calyx()
Mimosa_tarda.flower.corolla = new Corolla()

Mimosa_tarda.androecium = new Androecium()
Mimosa_tarda.androecium.filaments = new Filaments()
Mimosa_tarda.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_tarda.ginoecium = new Ginoecium()
Mimosa_tarda.ginoecium.ovary = new Ovary()

Mimosa_tarda.fruit = new Fruit()
Mimosa_tarda.fruit.stipe = new Stipe()
Mimosa_tarda.fruit.replum = new Replum()
Mimosa_tarda.fruit.epicarp = new Epicarp()

Mimosa_tarda.seed = new Seed()


// Description authorship
Mimosa_tarda.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tarda.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tarda
export { Mimosa_tarda }