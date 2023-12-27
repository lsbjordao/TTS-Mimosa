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


// Description of Mimosa heringeri
const Mimosa_heringeri = new Mimosa()
Mimosa_heringeri.specificEpithet = 'heringeri'

Mimosa_heringeri.stems = new Stems()

Mimosa_heringeri.stipule = new Stipule()
Mimosa_heringeri.stipule.margin = new MarginStipule()
Mimosa_heringeri.stipule.adaxial = new AdaxialStipule()
Mimosa_heringeri.stipule.abaxial = new AbaxialStipule()

Mimosa_heringeri.leaf = new Leaf()
Mimosa_heringeri.leaf.petiole = new Petiole()
Mimosa_heringeri.leaf.bipinnate = new Bipinnate()
Mimosa_heringeri.leaf.bipinnate.rachis = new Rachis()
Mimosa_heringeri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_heringeri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_heringeri.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_heringeri.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 18)
Mimosa_heringeri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_heringeri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_heringeri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_heringeri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 14)
Mimosa_heringeri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_heringeri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_heringeri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_heringeri.inflorescence = new Inflorescence()
Mimosa_heringeri.inflorescence.peduncle = new Peduncle()
Mimosa_heringeri.inflorescence.capitate = new CapitateInflorescence()

Mimosa_heringeri.flower = new Flower()
Mimosa_heringeri.flower.bracteole = new Bracteole()
Mimosa_heringeri.flower.merism = '4-merous'
Mimosa_heringeri.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_heringeri.flower.calyx = new Calyx()
Mimosa_heringeri.flower.corolla = new Corolla()

Mimosa_heringeri.androecium = new Androecium()
Mimosa_heringeri.androecium.filaments = new Filaments()
Mimosa_heringeri.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_heringeri.ginoecium = new Ginoecium()
Mimosa_heringeri.ginoecium.ovary = new Ovary()

Mimosa_heringeri.fruit = new Fruit()
Mimosa_heringeri.fruit.stipe = new Stipe()
Mimosa_heringeri.fruit.replum = new Replum()
Mimosa_heringeri.fruit.epicarp = new Epicarp()

Mimosa_heringeri.seed = new Seed()


// Description authorship
Mimosa_heringeri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_heringeri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa heringeri
export { Mimosa_heringeri }