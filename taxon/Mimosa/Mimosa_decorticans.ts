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


// Description of Mimosa decorticans
const Mimosa_decorticans = new Mimosa()
Mimosa_decorticans.specificEpithet = 'decorticans'

Mimosa_decorticans.stems = new Stems()

Mimosa_decorticans.stipule = new Stipule()
Mimosa_decorticans.stipule.margin = new MarginStipule()
Mimosa_decorticans.stipule.adaxial = new AdaxialStipule()
Mimosa_decorticans.stipule.abaxial = new AbaxialStipule()

Mimosa_decorticans.leaf = new Leaf()
Mimosa_decorticans.leaf.petiole = new Petiole()
Mimosa_decorticans.leaf.bipinnate = new Bipinnate()
Mimosa_decorticans.leaf.bipinnate.rachis = new Rachis()
Mimosa_decorticans.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_decorticans.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_decorticans.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(15)
Mimosa_decorticans.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(17, 28)
Mimosa_decorticans.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_decorticans.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_decorticans.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_decorticans.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 34)
Mimosa_decorticans.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_decorticans.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_decorticans.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_decorticans.inflorescence = new Inflorescence()
Mimosa_decorticans.inflorescence.peduncle = new Peduncle()
Mimosa_decorticans.inflorescence.capitate = new CapitateInflorescence()

Mimosa_decorticans.flower = new Flower()
Mimosa_decorticans.flower.bracteole = new Bracteole()
Mimosa_decorticans.flower.merism = '4-merous'
Mimosa_decorticans.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_decorticans.flower.calyx = new Calyx()
Mimosa_decorticans.flower.corolla = new Corolla()
Mimosa_decorticans.flower.corolla.shape = 'funnelform'

Mimosa_decorticans.androecium = new Androecium()
Mimosa_decorticans.androecium.filaments = new Filaments()
Mimosa_decorticans.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_decorticans.ginoecium = new Ginoecium()
Mimosa_decorticans.ginoecium.ovary = new Ovary()

Mimosa_decorticans.fruit = new Fruit()
Mimosa_decorticans.fruit.stipe = new Stipe()
Mimosa_decorticans.fruit.replum = new Replum()
Mimosa_decorticans.fruit.epicarp = new Epicarp()

Mimosa_decorticans.seed = new Seed()


// Description authorship
Mimosa_decorticans.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_decorticans.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa decorticans
export { Mimosa_decorticans }