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


// Description of Mimosa stylosa
const Mimosa_stylosa = new Mimosa()
Mimosa_stylosa.specificEpithet = 'stylosa'

Mimosa_stylosa.stems = new Stems()

Mimosa_stylosa.stipule = new Stipule()
Mimosa_stylosa.stipule.margin = new MarginStipule()
Mimosa_stylosa.stipule.adaxial = new AdaxialStipule()
Mimosa_stylosa.stipule.abaxial = new AbaxialStipule()

Mimosa_stylosa.leaf = new Leaf()
Mimosa_stylosa.leaf.petiole = new Petiole()
Mimosa_stylosa.leaf.bipinnate = new Bipinnate()
Mimosa_stylosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_stylosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_stylosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_stylosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(20, 28)
Mimosa_stylosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_stylosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_stylosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_stylosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_stylosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_stylosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_stylosa.inflorescence = new Inflorescence()
Mimosa_stylosa.inflorescence.peduncle = new Peduncle()
Mimosa_stylosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_stylosa.flower = new Flower()
Mimosa_stylosa.flower.bracteole = new Bracteole()
Mimosa_stylosa.flower.merism = '4-merous'
Mimosa_stylosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_stylosa.flower.calyx = new Calyx()
Mimosa_stylosa.flower.corolla = new Corolla()

Mimosa_stylosa.androecium = new Androecium()
Mimosa_stylosa.androecium.filaments = new Filaments()
Mimosa_stylosa.androecium.filaments.colour = 'pinkish'

Mimosa_stylosa.ginoecium = new Ginoecium()
Mimosa_stylosa.ginoecium.ovary = new Ovary()

Mimosa_stylosa.fruit = new Fruit()
Mimosa_stylosa.fruit.stipe = new Stipe()
Mimosa_stylosa.fruit.replum = new Replum()
Mimosa_stylosa.fruit.epicarp = new Epicarp()

Mimosa_stylosa.seed = new Seed()


// Description authorship
Mimosa_stylosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_stylosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa stylosa
export { Mimosa_stylosa }