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


// Description of Mimosa somnambulans
const Mimosa_somnambulans = new Mimosa()
Mimosa_somnambulans.specificEpithet = 'somnambulans'

Mimosa_somnambulans.stems = new Stems()

Mimosa_somnambulans.stipule = new Stipule()
Mimosa_somnambulans.stipule.margin = new MarginStipule()
Mimosa_somnambulans.stipule.adaxial = new AdaxialStipule()
Mimosa_somnambulans.stipule.abaxial = new AbaxialStipule()

Mimosa_somnambulans.leaf = new Leaf()
Mimosa_somnambulans.leaf.petiole = new Petiole()
Mimosa_somnambulans.leaf.bipinnate = new Bipinnate()
Mimosa_somnambulans.leaf.bipinnate.rachis = new Rachis()
Mimosa_somnambulans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_somnambulans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_somnambulans.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_somnambulans.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_somnambulans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_somnambulans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_somnambulans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_somnambulans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_somnambulans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_somnambulans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_somnambulans.inflorescence = new Inflorescence()
Mimosa_somnambulans.inflorescence.peduncle = new Peduncle()
Mimosa_somnambulans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_somnambulans.flower = new Flower()
Mimosa_somnambulans.flower.bracteole = new Bracteole()
Mimosa_somnambulans.flower.merism = '4-merous'
Mimosa_somnambulans.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_somnambulans.flower.calyx = new Calyx()
Mimosa_somnambulans.flower.calyx.shape = 'campanulate'
Mimosa_somnambulans.flower.corolla = new Corolla()
Mimosa_somnambulans.flower.corolla.shape = 'turbinate'

Mimosa_somnambulans.androecium = new Androecium()
Mimosa_somnambulans.androecium.filaments = new Filaments()

Mimosa_somnambulans.ginoecium = new Ginoecium()
Mimosa_somnambulans.ginoecium.ovary = new Ovary()

Mimosa_somnambulans.fruit = new Fruit()
Mimosa_somnambulans.fruit.stipe = new Stipe()
Mimosa_somnambulans.fruit.replum = new Replum()
Mimosa_somnambulans.fruit.epicarp = new Epicarp()

Mimosa_somnambulans.seed = new Seed()


// Description authorship
Mimosa_somnambulans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_somnambulans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa somnambulans
export { Mimosa_somnambulans }