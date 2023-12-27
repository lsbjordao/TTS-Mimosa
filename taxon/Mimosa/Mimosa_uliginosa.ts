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


// Description of Mimosa uliginosa
const Mimosa_uliginosa = new Mimosa()
Mimosa_uliginosa.specificEpithet = 'uliginosa'

Mimosa_uliginosa.stems = new Stems()

Mimosa_uliginosa.stipule = new Stipule()
Mimosa_uliginosa.stipule.margin = new MarginStipule()
Mimosa_uliginosa.stipule.adaxial = new AdaxialStipule()
Mimosa_uliginosa.stipule.abaxial = new AbaxialStipule()

Mimosa_uliginosa.leaf = new Leaf()
Mimosa_uliginosa.leaf.petiole = new Petiole()
Mimosa_uliginosa.leaf.bipinnate = new Bipinnate()
Mimosa_uliginosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_uliginosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_uliginosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_uliginosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_uliginosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 8)
Mimosa_uliginosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_uliginosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_uliginosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_uliginosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_uliginosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_uliginosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_uliginosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_uliginosa.inflorescence = new Inflorescence()
Mimosa_uliginosa.inflorescence.peduncle = new Peduncle()
Mimosa_uliginosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_uliginosa.flower = new Flower()
Mimosa_uliginosa.flower.bracteole = new Bracteole()
Mimosa_uliginosa.flower.merism = '4-merous'
Mimosa_uliginosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_uliginosa.flower.calyx = new Calyx()
Mimosa_uliginosa.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_uliginosa.flower.corolla = new Corolla()

Mimosa_uliginosa.androecium = new Androecium()
Mimosa_uliginosa.androecium.filaments = new Filaments()
Mimosa_uliginosa.androecium.filaments.colour = 'pinkish'

Mimosa_uliginosa.ginoecium = new Ginoecium()
Mimosa_uliginosa.ginoecium.ovary = new Ovary()

Mimosa_uliginosa.fruit = new Fruit()
Mimosa_uliginosa.fruit.stipe = new Stipe()
Mimosa_uliginosa.fruit.replum = new Replum()
Mimosa_uliginosa.fruit.epicarp = new Epicarp()

Mimosa_uliginosa.seed = new Seed()


// Description authorship
Mimosa_uliginosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_uliginosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa uliginosa
export { Mimosa_uliginosa }