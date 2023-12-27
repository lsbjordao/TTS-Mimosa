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


// Description of Mimosa microcephala
const Mimosa_microcephala = new Mimosa()
Mimosa_microcephala.specificEpithet = 'microcephala'

Mimosa_microcephala.stems = new Stems()

Mimosa_microcephala.stipule = new Stipule()
Mimosa_microcephala.stipule.margin = new MarginStipule()
Mimosa_microcephala.stipule.adaxial = new AdaxialStipule()
Mimosa_microcephala.stipule.abaxial = new AbaxialStipule()

Mimosa_microcephala.leaf = new Leaf()
Mimosa_microcephala.leaf.petiole = new Petiole()
Mimosa_microcephala.leaf.bipinnate = new Bipinnate()
Mimosa_microcephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_microcephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_microcephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_microcephala.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(7)
Mimosa_microcephala.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 30)
Mimosa_microcephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_microcephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_microcephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_microcephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 35)
Mimosa_microcephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_microcephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_microcephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_microcephala.inflorescence = new Inflorescence()
Mimosa_microcephala.inflorescence.peduncle = new Peduncle()
Mimosa_microcephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_microcephala.flower = new Flower()
Mimosa_microcephala.flower.bracteole = new Bracteole()
Mimosa_microcephala.flower.merism = '4-merous'
Mimosa_microcephala.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_microcephala.flower.calyx = new Calyx()
Mimosa_microcephala.flower.corolla = new Corolla()
Mimosa_microcephala.flower.corolla.shape = 'turbinate'

Mimosa_microcephala.androecium = new Androecium()
Mimosa_microcephala.androecium.filaments = new Filaments()
Mimosa_microcephala.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_microcephala.ginoecium = new Ginoecium()
Mimosa_microcephala.ginoecium.ovary = new Ovary()

Mimosa_microcephala.fruit = new Fruit()
Mimosa_microcephala.fruit.stipe = new Stipe()
Mimosa_microcephala.fruit.replum = new Replum()
Mimosa_microcephala.fruit.epicarp = new Epicarp()

Mimosa_microcephala.seed = new Seed()


// Description authorship
Mimosa_microcephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_microcephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa microcephala
export { Mimosa_microcephala }