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


// Description of Mimosa calodendron
const Mimosa_calodendron = new Mimosa()
Mimosa_calodendron.specificEpithet = 'calodendron'

Mimosa_calodendron.stems = new Stems()

Mimosa_calodendron.stipule = new Stipule()
Mimosa_calodendron.stipule.margin = new MarginStipule()
Mimosa_calodendron.stipule.adaxial = new AdaxialStipule()
Mimosa_calodendron.stipule.abaxial = new AbaxialStipule()

Mimosa_calodendron.leaf = new Leaf()
Mimosa_calodendron.leaf.petiole = new Petiole()
Mimosa_calodendron.leaf.bipinnate = new Bipinnate()
Mimosa_calodendron.leaf.bipinnate.rachis = new Rachis()
Mimosa_calodendron.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_calodendron.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_calodendron.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_calodendron.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_calodendron.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_calodendron.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_calodendron.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_calodendron.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 18)
Mimosa_calodendron.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_calodendron.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_calodendron.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_calodendron.inflorescence = new Inflorescence()
Mimosa_calodendron.inflorescence.peduncle = new Peduncle()
Mimosa_calodendron.inflorescence.capitate = new CapitateInflorescence()

Mimosa_calodendron.flower = new Flower()
Mimosa_calodendron.flower.bracteole = new Bracteole()
Mimosa_calodendron.flower.merism = '4-merous'
Mimosa_calodendron.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_calodendron.flower.calyx = new Calyx()
Mimosa_calodendron.flower.calyx.shape = 'campanulate'
Mimosa_calodendron.flower.corolla = new Corolla()

Mimosa_calodendron.androecium = new Androecium()
Mimosa_calodendron.androecium.filaments = new Filaments()
Mimosa_calodendron.androecium.filaments.colour = 'yellowish'

Mimosa_calodendron.ginoecium = new Ginoecium()
Mimosa_calodendron.ginoecium.ovary = new Ovary()

Mimosa_calodendron.fruit = new Fruit()
Mimosa_calodendron.fruit.stipe = new Stipe()
Mimosa_calodendron.fruit.replum = new Replum()
Mimosa_calodendron.fruit.epicarp = new Epicarp()

Mimosa_calodendron.seed = new Seed()


// Description authorship
Mimosa_calodendron.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_calodendron.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa calodendron
export { Mimosa_calodendron }