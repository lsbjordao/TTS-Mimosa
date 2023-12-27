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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa daleoides
const Mimosa_daleoides = new Mimosa()
Mimosa_daleoides.specificEpithet = 'daleoides'

Mimosa_daleoides.stems = new Stems()

Mimosa_daleoides.stipule = new Stipule()
Mimosa_daleoides.stipule.margin = new MarginStipule()
Mimosa_daleoides.stipule.adaxial = new AdaxialStipule()
Mimosa_daleoides.stipule.abaxial = new AbaxialStipule()

Mimosa_daleoides.leaf = new Leaf()
Mimosa_daleoides.leaf.petiole = new Petiole()
Mimosa_daleoides.leaf.bipinnate = new Bipinnate()
Mimosa_daleoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_daleoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_daleoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_daleoides.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_daleoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_daleoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_daleoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_daleoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_daleoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_daleoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_daleoides.inflorescence = new Inflorescence()
Mimosa_daleoides.inflorescence.peduncle = new Peduncle()
Mimosa_daleoides.inflorescence.spicate = new Spicate()

Mimosa_daleoides.flower = new Flower()
Mimosa_daleoides.flower.bracteole = new Bracteole()
Mimosa_daleoides.flower.merism = '4-merous'
Mimosa_daleoides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_daleoides.flower.calyx = new Calyx()
Mimosa_daleoides.flower.calyx.shape = 'discoid'
Mimosa_daleoides.flower.corolla = new Corolla()

Mimosa_daleoides.androecium = new Androecium()
Mimosa_daleoides.androecium.filaments = new Filaments()
Mimosa_daleoides.androecium.filaments.colour = 'yellowish'

Mimosa_daleoides.ginoecium = new Ginoecium()
Mimosa_daleoides.ginoecium.ovary = new Ovary()

Mimosa_daleoides.fruit = new Fruit()
Mimosa_daleoides.fruit.stipe = new Stipe()
Mimosa_daleoides.fruit.replum = new Replum()
Mimosa_daleoides.fruit.epicarp = new Epicarp()

Mimosa_daleoides.seed = new Seed()


// Description authorship
Mimosa_daleoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_daleoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa daleoides
export { Mimosa_daleoides }