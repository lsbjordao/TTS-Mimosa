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


// Description of Mimosa lawranceana
const Mimosa_lawranceana = new Mimosa()
Mimosa_lawranceana.specificEpithet = 'lawranceana'

Mimosa_lawranceana.stems = new Stems()

Mimosa_lawranceana.stipule = new Stipule()
Mimosa_lawranceana.stipule.margin = new MarginStipule()
Mimosa_lawranceana.stipule.adaxial = new AdaxialStipule()
Mimosa_lawranceana.stipule.abaxial = new AbaxialStipule()

Mimosa_lawranceana.leaf = new Leaf()
Mimosa_lawranceana.leaf.petiole = new Petiole()
Mimosa_lawranceana.leaf.bipinnate = new Bipinnate()
Mimosa_lawranceana.leaf.bipinnate.rachis = new Rachis()
Mimosa_lawranceana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lawranceana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lawranceana.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_lawranceana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lawranceana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lawranceana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lawranceana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(56, 9)
Mimosa_lawranceana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lawranceana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lawranceana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lawranceana.inflorescence = new Inflorescence()
Mimosa_lawranceana.inflorescence.peduncle = new Peduncle()
Mimosa_lawranceana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lawranceana.flower = new Flower()
Mimosa_lawranceana.flower.bracteole = new Bracteole()
Mimosa_lawranceana.flower.merism = '4-merous'
Mimosa_lawranceana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_lawranceana.flower.calyx = new Calyx()
Mimosa_lawranceana.flower.corolla = new Corolla()
Mimosa_lawranceana.flower.corolla.shape = 'turbinate'

Mimosa_lawranceana.androecium = new Androecium()
Mimosa_lawranceana.androecium.filaments = new Filaments()
Mimosa_lawranceana.androecium.filaments.colour = ['creamish', 'whitenish']

Mimosa_lawranceana.ginoecium = new Ginoecium()
Mimosa_lawranceana.ginoecium.ovary = new Ovary()

Mimosa_lawranceana.fruit = new Fruit()
Mimosa_lawranceana.fruit.stipe = new Stipe()
Mimosa_lawranceana.fruit.replum = new Replum()
Mimosa_lawranceana.fruit.epicarp = new Epicarp()

Mimosa_lawranceana.seed = new Seed()


// Description authorship
Mimosa_lawranceana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lawranceana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lawranceana
export { Mimosa_lawranceana }