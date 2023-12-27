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


// Description of Mimosa skinneri
const Mimosa_skinneri = new Mimosa()
Mimosa_skinneri.specificEpithet = 'skinneri'

Mimosa_skinneri.stems = new Stems()

Mimosa_skinneri.stipule = new Stipule()
Mimosa_skinneri.stipule.margin = new MarginStipule()
Mimosa_skinneri.stipule.adaxial = new AdaxialStipule()
Mimosa_skinneri.stipule.abaxial = new AbaxialStipule()

Mimosa_skinneri.leaf = new Leaf()
Mimosa_skinneri.leaf.petiole = new Petiole()
Mimosa_skinneri.leaf.bipinnate = new Bipinnate()
Mimosa_skinneri.leaf.bipinnate.rachis = new Rachis()
Mimosa_skinneri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_skinneri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_skinneri.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_skinneri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_skinneri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_skinneri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_skinneri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(23, 31)
Mimosa_skinneri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_skinneri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_skinneri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_skinneri.inflorescence = new Inflorescence()
Mimosa_skinneri.inflorescence.peduncle = new Peduncle()
Mimosa_skinneri.inflorescence.capitate = new CapitateInflorescence()

Mimosa_skinneri.flower = new Flower()
Mimosa_skinneri.flower.bracteole = new Bracteole()
Mimosa_skinneri.flower.merism = '4-merous'
Mimosa_skinneri.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_skinneri.flower.calyx = new Calyx()
Mimosa_skinneri.flower.corolla = new Corolla()
Mimosa_skinneri.flower.corolla.shape = 'vase-shaped'

Mimosa_skinneri.androecium = new Androecium()
Mimosa_skinneri.androecium.filaments = new Filaments()
Mimosa_skinneri.androecium.filaments.colour = 'pinkish'

Mimosa_skinneri.ginoecium = new Ginoecium()
Mimosa_skinneri.ginoecium.ovary = new Ovary()

Mimosa_skinneri.fruit = new Fruit()
Mimosa_skinneri.fruit.stipe = new Stipe()
Mimosa_skinneri.fruit.replum = new Replum()
Mimosa_skinneri.fruit.epicarp = new Epicarp()

Mimosa_skinneri.seed = new Seed()


// Description authorship
Mimosa_skinneri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_skinneri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa skinneri
export { Mimosa_skinneri }