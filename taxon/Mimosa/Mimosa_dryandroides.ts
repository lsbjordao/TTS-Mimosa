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


// Description of Mimosa dryandroides
const Mimosa_dryandroides = new Mimosa()
Mimosa_dryandroides.specificEpithet = 'dryandroides'

Mimosa_dryandroides.stems = new Stems()

Mimosa_dryandroides.stipule = new Stipule()
Mimosa_dryandroides.stipule.margin = new MarginStipule()
Mimosa_dryandroides.stipule.adaxial = new AdaxialStipule()
Mimosa_dryandroides.stipule.abaxial = new AbaxialStipule()

Mimosa_dryandroides.leaf = new Leaf()
Mimosa_dryandroides.leaf.petiole = new Petiole()
Mimosa_dryandroides.leaf.bipinnate = new Bipinnate()
Mimosa_dryandroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_dryandroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dryandroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dryandroides.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dryandroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dryandroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 16)
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dryandroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dryandroides.inflorescence = new Inflorescence()
Mimosa_dryandroides.inflorescence.peduncle = new Peduncle()
Mimosa_dryandroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dryandroides.flower = new Flower()
Mimosa_dryandroides.flower.bracteole = new Bracteole()
Mimosa_dryandroides.flower.merism = '4-merous'
Mimosa_dryandroides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dryandroides.flower.calyx = new Calyx()
Mimosa_dryandroides.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_dryandroides.flower.corolla = new Corolla()
Mimosa_dryandroides.flower.corolla.shape = 'vase-shaped'

Mimosa_dryandroides.androecium = new Androecium()
Mimosa_dryandroides.androecium.filaments = new Filaments()
Mimosa_dryandroides.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_dryandroides.ginoecium = new Ginoecium()
Mimosa_dryandroides.ginoecium.ovary = new Ovary()

Mimosa_dryandroides.fruit = new Fruit()
Mimosa_dryandroides.fruit.stipe = new Stipe()
Mimosa_dryandroides.fruit.replum = new Replum()
Mimosa_dryandroides.fruit.epicarp = new Epicarp()

Mimosa_dryandroides.seed = new Seed()


// Description authorship
Mimosa_dryandroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dryandroides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dryandroides
export { Mimosa_dryandroides }