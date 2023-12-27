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


// Description of Mimosa chrysastra
const Mimosa_chrysastra = new Mimosa()
Mimosa_chrysastra.specificEpithet = 'chrysastra'

Mimosa_chrysastra.stems = new Stems()

Mimosa_chrysastra.stipule = new Stipule()
Mimosa_chrysastra.stipule.margin = new MarginStipule()
Mimosa_chrysastra.stipule.adaxial = new AdaxialStipule()
Mimosa_chrysastra.stipule.abaxial = new AbaxialStipule()

Mimosa_chrysastra.leaf = new Leaf()
Mimosa_chrysastra.leaf.petiole = new Petiole()
Mimosa_chrysastra.leaf.bipinnate = new Bipinnate()
Mimosa_chrysastra.leaf.bipinnate.rachis = new Rachis()
Mimosa_chrysastra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_chrysastra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_chrysastra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 4)
Mimosa_chrysastra.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_chrysastra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_chrysastra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 8)
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_chrysastra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_chrysastra.inflorescence = new Inflorescence()
Mimosa_chrysastra.inflorescence.peduncle = new Peduncle()
Mimosa_chrysastra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_chrysastra.flower = new Flower()
Mimosa_chrysastra.flower.bracteole = new Bracteole()
Mimosa_chrysastra.flower.merism = '4-merous'
Mimosa_chrysastra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_chrysastra.flower.calyx = new Calyx()
Mimosa_chrysastra.flower.calyx.shape = 'campanulate'
Mimosa_chrysastra.flower.corolla = new Corolla()
Mimosa_chrysastra.flower.corolla.shape = 'turbinate'

Mimosa_chrysastra.androecium = new Androecium()
Mimosa_chrysastra.androecium.filaments = new Filaments()
Mimosa_chrysastra.androecium.filaments.colour = ['whitenish', 'yellowish']

Mimosa_chrysastra.ginoecium = new Ginoecium()
Mimosa_chrysastra.ginoecium.ovary = new Ovary()

Mimosa_chrysastra.fruit = new Fruit()
Mimosa_chrysastra.fruit.stipe = new Stipe()
Mimosa_chrysastra.fruit.replum = new Replum()
Mimosa_chrysastra.fruit.epicarp = new Epicarp()

Mimosa_chrysastra.seed = new Seed()


// Description authorship
Mimosa_chrysastra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_chrysastra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa chrysastra
export { Mimosa_chrysastra }