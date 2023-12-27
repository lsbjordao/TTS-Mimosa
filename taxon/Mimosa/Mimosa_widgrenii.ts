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


// Description of Mimosa widgrenii
const Mimosa_widgrenii = new Mimosa()
Mimosa_widgrenii.specificEpithet = 'widgrenii'

Mimosa_widgrenii.stems = new Stems()

Mimosa_widgrenii.stipule = new Stipule()
Mimosa_widgrenii.stipule.margin = new MarginStipule()
Mimosa_widgrenii.stipule.adaxial = new AdaxialStipule()
Mimosa_widgrenii.stipule.abaxial = new AbaxialStipule()

Mimosa_widgrenii.leaf = new Leaf()
Mimosa_widgrenii.leaf.petiole = new Petiole()
Mimosa_widgrenii.leaf.bipinnate = new Bipinnate()
Mimosa_widgrenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_widgrenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_widgrenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_widgrenii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 10)
Mimosa_widgrenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_widgrenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(13)
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 22)
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_widgrenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_widgrenii.inflorescence = new Inflorescence()
Mimosa_widgrenii.inflorescence.peduncle = new Peduncle()
Mimosa_widgrenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_widgrenii.flower = new Flower()
Mimosa_widgrenii.flower.bracteole = new Bracteole()
Mimosa_widgrenii.flower.merism = '4-merous'
Mimosa_widgrenii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_widgrenii.flower.calyx = new Calyx()
Mimosa_widgrenii.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_widgrenii.flower.corolla = new Corolla()
Mimosa_widgrenii.flower.corolla.shape = 'turbinate'

Mimosa_widgrenii.androecium = new Androecium()
Mimosa_widgrenii.androecium.filaments = new Filaments()
Mimosa_widgrenii.androecium.filaments.colour = 'pinkish'

Mimosa_widgrenii.ginoecium = new Ginoecium()
Mimosa_widgrenii.ginoecium.ovary = new Ovary()

Mimosa_widgrenii.fruit = new Fruit()
Mimosa_widgrenii.fruit.stipe = new Stipe()
Mimosa_widgrenii.fruit.replum = new Replum()
Mimosa_widgrenii.fruit.epicarp = new Epicarp()

Mimosa_widgrenii.seed = new Seed()


// Description authorship
Mimosa_widgrenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_widgrenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa widgrenii
export { Mimosa_widgrenii }