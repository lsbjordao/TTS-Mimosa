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


// Description of Mimosa piresii
const Mimosa_piresii = new Mimosa()
Mimosa_piresii.specificEpithet = 'piresii'

Mimosa_piresii.stems = new Stems()

Mimosa_piresii.stipule = new Stipule()
Mimosa_piresii.stipule.margin = new MarginStipule()
Mimosa_piresii.stipule.adaxial = new AdaxialStipule()
Mimosa_piresii.stipule.abaxial = new AbaxialStipule()

Mimosa_piresii.leaf = new Leaf()
Mimosa_piresii.leaf.petiole = new Petiole()
Mimosa_piresii.leaf.bipinnate = new Bipinnate()
Mimosa_piresii.leaf.bipinnate.rachis = new Rachis()
Mimosa_piresii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_piresii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_piresii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_piresii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_piresii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_piresii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_piresii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_piresii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_piresii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_piresii.inflorescence = new Inflorescence()
Mimosa_piresii.inflorescence.peduncle = new Peduncle()
Mimosa_piresii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_piresii.flower = new Flower()
Mimosa_piresii.flower.bracteole = new Bracteole()
Mimosa_piresii.flower.merism = '4-merous'
Mimosa_piresii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_piresii.flower.calyx = new Calyx()
Mimosa_piresii.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_piresii.flower.corolla = new Corolla()
Mimosa_piresii.flower.corolla.shape = 'turbinate'

Mimosa_piresii.androecium = new Androecium()
Mimosa_piresii.androecium.filaments = new Filaments()
Mimosa_piresii.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_piresii.ginoecium = new Ginoecium()
Mimosa_piresii.ginoecium.ovary = new Ovary()

Mimosa_piresii.fruit = new Fruit()
Mimosa_piresii.fruit.stipe = new Stipe()
Mimosa_piresii.fruit.replum = new Replum()
Mimosa_piresii.fruit.epicarp = new Epicarp()

Mimosa_piresii.seed = new Seed()


// Description authorship
Mimosa_piresii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_piresii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa piresii
export { Mimosa_piresii }