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


// Description of Mimosa pabstiana
const Mimosa_pabstiana = new Mimosa()
Mimosa_pabstiana.specificEpithet = 'pabstiana'

Mimosa_pabstiana.stems = new Stems()

Mimosa_pabstiana.stipule = new Stipule()
Mimosa_pabstiana.stipule.margin = new MarginStipule()
Mimosa_pabstiana.stipule.adaxial = new AdaxialStipule()
Mimosa_pabstiana.stipule.abaxial = new AbaxialStipule()

Mimosa_pabstiana.leaf = new Leaf()
Mimosa_pabstiana.leaf.petiole = new Petiole()
Mimosa_pabstiana.leaf.bipinnate = new Bipinnate()
Mimosa_pabstiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_pabstiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pabstiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pabstiana.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_pabstiana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 7)
Mimosa_pabstiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pabstiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 20)
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pabstiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pabstiana.inflorescence = new Inflorescence()
Mimosa_pabstiana.inflorescence.peduncle = new Peduncle()
Mimosa_pabstiana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pabstiana.flower = new Flower()
Mimosa_pabstiana.flower.bracteole = new Bracteole()
Mimosa_pabstiana.flower.merism = '3-merous'
Mimosa_pabstiana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pabstiana.flower.calyx = new Calyx()
Mimosa_pabstiana.flower.calyx.shape = 'campanulate'
Mimosa_pabstiana.flower.corolla = new Corolla()
Mimosa_pabstiana.flower.corolla.shape = 'turbinate'

Mimosa_pabstiana.androecium = new Androecium()
Mimosa_pabstiana.androecium.filaments = new Filaments()
Mimosa_pabstiana.androecium.filaments.colour = 'whitenish'

Mimosa_pabstiana.ginoecium = new Ginoecium()
Mimosa_pabstiana.ginoecium.ovary = new Ovary()

Mimosa_pabstiana.fruit = new Fruit()
Mimosa_pabstiana.fruit.stipe = new Stipe()
Mimosa_pabstiana.fruit.replum = new Replum()
Mimosa_pabstiana.fruit.epicarp = new Epicarp()

Mimosa_pabstiana.seed = new Seed()


// Description authorship
Mimosa_pabstiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pabstiana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa pabstiana
export { Mimosa_pabstiana }