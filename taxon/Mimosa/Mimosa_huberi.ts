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


// Description of Mimosa huberi
const Mimosa_huberi = new Mimosa()
Mimosa_huberi.specificEpithet = 'huberi'

Mimosa_huberi.stems = new Stems()

Mimosa_huberi.stipule = new Stipule()
Mimosa_huberi.stipule.margin = new MarginStipule()
Mimosa_huberi.stipule.adaxial = new AdaxialStipule()
Mimosa_huberi.stipule.abaxial = new AbaxialStipule()

Mimosa_huberi.leaf = new Leaf()
Mimosa_huberi.leaf.petiole = new Petiole()
Mimosa_huberi.leaf.bipinnate = new Bipinnate()
Mimosa_huberi.leaf.bipinnate.rachis = new Rachis()
Mimosa_huberi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_huberi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_huberi.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_huberi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_huberi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(10)
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_huberi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_huberi.inflorescence = new Inflorescence()
Mimosa_huberi.inflorescence.peduncle = new Peduncle()
Mimosa_huberi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_huberi.flower = new Flower()
Mimosa_huberi.flower.bracteole = new Bracteole()
Mimosa_huberi.flower.merism = '4-merous'
Mimosa_huberi.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_huberi.flower.calyx = new Calyx()
Mimosa_huberi.flower.calyx.shape = 'pappiform'
Mimosa_huberi.flower.corolla = new Corolla()
Mimosa_huberi.flower.corolla.shape = 'vase-shaped'

Mimosa_huberi.androecium = new Androecium()
Mimosa_huberi.androecium.filaments = new Filaments()
Mimosa_huberi.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_huberi.ginoecium = new Ginoecium()
Mimosa_huberi.ginoecium.ovary = new Ovary()

Mimosa_huberi.fruit = new Fruit()
Mimosa_huberi.fruit.stipe = new Stipe()
Mimosa_huberi.fruit.replum = new Replum()
Mimosa_huberi.fruit.epicarp = new Epicarp()

Mimosa_huberi.seed = new Seed()


// Description authorship
Mimosa_huberi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_huberi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa huberi
export { Mimosa_huberi }