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


// Description of Mimosa serra
const Mimosa_serra = new Mimosa()
Mimosa_serra.specificEpithet = 'serra'

Mimosa_serra.stems = new Stems()

Mimosa_serra.stipule = new Stipule()
Mimosa_serra.stipule.margin = new MarginStipule()
Mimosa_serra.stipule.adaxial = new AdaxialStipule()
Mimosa_serra.stipule.abaxial = new AbaxialStipule()

Mimosa_serra.leaf = new Leaf()
Mimosa_serra.leaf.petiole = new Petiole()
Mimosa_serra.leaf.bipinnate = new Bipinnate()
Mimosa_serra.leaf.bipinnate.rachis = new Rachis()
Mimosa_serra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_serra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_serra.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_serra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_serra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_serra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_serra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(33, 42)
Mimosa_serra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_serra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_serra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_serra.inflorescence = new Inflorescence()
Mimosa_serra.inflorescence.peduncle = new Peduncle()
Mimosa_serra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_serra.flower = new Flower()
Mimosa_serra.flower.bracteole = new Bracteole()
Mimosa_serra.flower.merism = '4-merous'
Mimosa_serra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_serra.flower.calyx = new Calyx()
Mimosa_serra.flower.corolla = new Corolla()
Mimosa_serra.flower.corolla.shape = 'funnelform'

Mimosa_serra.androecium = new Androecium()
Mimosa_serra.androecium.filaments = new Filaments()
Mimosa_serra.androecium.filaments.colour = 'pinkish'

Mimosa_serra.ginoecium = new Ginoecium()
Mimosa_serra.ginoecium.ovary = new Ovary()

Mimosa_serra.fruit = new Fruit()
Mimosa_serra.fruit.stipe = new Stipe()
Mimosa_serra.fruit.replum = new Replum()
Mimosa_serra.fruit.epicarp = new Epicarp()

Mimosa_serra.seed = new Seed()


// Description authorship
Mimosa_serra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_serra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa serra
export { Mimosa_serra }