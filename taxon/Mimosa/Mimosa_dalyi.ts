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


// Description of Mimosa dalyi
const Mimosa_dalyi = new Mimosa()
Mimosa_dalyi.specificEpithet = 'dalyi'

Mimosa_dalyi.stems = new Stems()

Mimosa_dalyi.stipule = new Stipule()
Mimosa_dalyi.stipule.margin = new MarginStipule()
Mimosa_dalyi.stipule.adaxial = new AdaxialStipule()
Mimosa_dalyi.stipule.abaxial = new AbaxialStipule()

Mimosa_dalyi.leaf = new Leaf()
Mimosa_dalyi.leaf.petiole = new Petiole()
Mimosa_dalyi.leaf.bipinnate = new Bipinnate()
Mimosa_dalyi.leaf.bipinnate.rachis = new Rachis()
Mimosa_dalyi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dalyi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dalyi.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(18, 31)
Mimosa_dalyi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dalyi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dalyi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dalyi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 13)
Mimosa_dalyi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dalyi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dalyi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dalyi.inflorescence = new Inflorescence()
Mimosa_dalyi.inflorescence.peduncle = new Peduncle()
Mimosa_dalyi.inflorescence.spicate = new Spicate()

Mimosa_dalyi.flower = new Flower()
Mimosa_dalyi.flower.bracteole = new Bracteole()
Mimosa_dalyi.flower.merism = '4-merous'
Mimosa_dalyi.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_dalyi.flower.calyx = new Calyx()
Mimosa_dalyi.flower.calyx.shape = 'campanulate'
Mimosa_dalyi.flower.corolla = new Corolla()

Mimosa_dalyi.androecium = new Androecium()
Mimosa_dalyi.androecium.filaments = new Filaments()

Mimosa_dalyi.ginoecium = new Ginoecium()
Mimosa_dalyi.ginoecium.ovary = new Ovary()

Mimosa_dalyi.fruit = new Fruit()
Mimosa_dalyi.fruit.stipe = new Stipe()
Mimosa_dalyi.fruit.replum = new Replum()
Mimosa_dalyi.fruit.epicarp = new Epicarp()

Mimosa_dalyi.seed = new Seed()


// Description authorship
Mimosa_dalyi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dalyi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa dalyi
export { Mimosa_dalyi }