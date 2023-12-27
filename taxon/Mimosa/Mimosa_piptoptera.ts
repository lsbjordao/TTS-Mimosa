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


// Description of Mimosa piptoptera
const Mimosa_piptoptera = new Mimosa()
Mimosa_piptoptera.specificEpithet = 'piptoptera'

Mimosa_piptoptera.stems = new Stems()

Mimosa_piptoptera.stipule = new Stipule()
Mimosa_piptoptera.stipule.margin = new MarginStipule()
Mimosa_piptoptera.stipule.adaxial = new AdaxialStipule()
Mimosa_piptoptera.stipule.abaxial = new AbaxialStipule()

Mimosa_piptoptera.leaf = new Leaf()
Mimosa_piptoptera.leaf.petiole = new Petiole()
Mimosa_piptoptera.leaf.bipinnate = new Bipinnate()
Mimosa_piptoptera.leaf.bipinnate.rachis = new Rachis()
Mimosa_piptoptera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_piptoptera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_piptoptera.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_piptoptera.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_piptoptera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_piptoptera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_piptoptera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_piptoptera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 29)
Mimosa_piptoptera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_piptoptera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_piptoptera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_piptoptera.inflorescence = new Inflorescence()
Mimosa_piptoptera.inflorescence.peduncle = new Peduncle()
Mimosa_piptoptera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_piptoptera.flower = new Flower()
Mimosa_piptoptera.flower.bracteole = new Bracteole()
Mimosa_piptoptera.flower.merism = '4-merous'
Mimosa_piptoptera.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_piptoptera.flower.calyx = new Calyx()
Mimosa_piptoptera.flower.calyx.shape = 'campanulate'
Mimosa_piptoptera.flower.corolla = new Corolla()
Mimosa_piptoptera.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_piptoptera.androecium = new Androecium()
Mimosa_piptoptera.androecium.filaments = new Filaments()
Mimosa_piptoptera.androecium.filaments.colour = 'pinkish'

Mimosa_piptoptera.ginoecium = new Ginoecium()
Mimosa_piptoptera.ginoecium.ovary = new Ovary()

Mimosa_piptoptera.fruit = new Fruit()
Mimosa_piptoptera.fruit.stipe = new Stipe()
Mimosa_piptoptera.fruit.replum = new Replum()
Mimosa_piptoptera.fruit.epicarp = new Epicarp()

Mimosa_piptoptera.seed = new Seed()


// Description authorship
Mimosa_piptoptera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_piptoptera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa piptoptera
export { Mimosa_piptoptera }