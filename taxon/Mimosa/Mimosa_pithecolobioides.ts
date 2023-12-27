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


// Description of Mimosa pithecolobioides
const Mimosa_pithecolobioides = new Mimosa()
Mimosa_pithecolobioides.specificEpithet = 'pithecolobioides'

Mimosa_pithecolobioides.stems = new Stems()

Mimosa_pithecolobioides.stipule = new Stipule()
Mimosa_pithecolobioides.stipule.margin = new MarginStipule()
Mimosa_pithecolobioides.stipule.adaxial = new AdaxialStipule()
Mimosa_pithecolobioides.stipule.abaxial = new AbaxialStipule()

Mimosa_pithecolobioides.leaf = new Leaf()
Mimosa_pithecolobioides.leaf.petiole = new Petiole()
Mimosa_pithecolobioides.leaf.bipinnate = new Bipinnate()
Mimosa_pithecolobioides.leaf.bipinnate.rachis = new Rachis()
Mimosa_pithecolobioides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 5)
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 44)
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(48)
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pithecolobioides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pithecolobioides.inflorescence = new Inflorescence()
Mimosa_pithecolobioides.inflorescence.peduncle = new Peduncle()
Mimosa_pithecolobioides.inflorescence.spicate = new Spicate()

Mimosa_pithecolobioides.flower = new Flower()
Mimosa_pithecolobioides.flower.bracteole = new Bracteole()
Mimosa_pithecolobioides.flower.merism = '5-merous'
Mimosa_pithecolobioides.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pithecolobioides.flower.calyx = new Calyx()
Mimosa_pithecolobioides.flower.calyx.shape = 'campanulate'
Mimosa_pithecolobioides.flower.corolla = new Corolla()

Mimosa_pithecolobioides.androecium = new Androecium()
Mimosa_pithecolobioides.androecium.filaments = new Filaments()
Mimosa_pithecolobioides.androecium.filaments.colour = 'creamish'

Mimosa_pithecolobioides.ginoecium = new Ginoecium()
Mimosa_pithecolobioides.ginoecium.ovary = new Ovary()

Mimosa_pithecolobioides.fruit = new Fruit()
Mimosa_pithecolobioides.fruit.stipe = new Stipe()
Mimosa_pithecolobioides.fruit.replum = new Replum()
Mimosa_pithecolobioides.fruit.epicarp = new Epicarp()

Mimosa_pithecolobioides.seed = new Seed()


// Description authorship
Mimosa_pithecolobioides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pithecolobioides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pithecolobioides
export { Mimosa_pithecolobioides }