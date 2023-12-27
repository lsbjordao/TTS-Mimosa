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


// Description of Mimosa maguirei
const Mimosa_maguirei = new Mimosa()
Mimosa_maguirei.specificEpithet = 'maguirei'

Mimosa_maguirei.stems = new Stems()

Mimosa_maguirei.stipule = new Stipule()
Mimosa_maguirei.stipule.margin = new MarginStipule()
Mimosa_maguirei.stipule.adaxial = new AdaxialStipule()
Mimosa_maguirei.stipule.abaxial = new AbaxialStipule()

Mimosa_maguirei.leaf = new Leaf()
Mimosa_maguirei.leaf.petiole = new Petiole()
Mimosa_maguirei.leaf.bipinnate = new Bipinnate()
Mimosa_maguirei.leaf.bipinnate.rachis = new Rachis()
Mimosa_maguirei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_maguirei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_maguirei.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_maguirei.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 11)
Mimosa_maguirei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_maguirei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 40)
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(45)
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_maguirei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_maguirei.inflorescence = new Inflorescence()
Mimosa_maguirei.inflorescence.peduncle = new Peduncle()
Mimosa_maguirei.inflorescence.capitate = new CapitateInflorescence()

Mimosa_maguirei.flower = new Flower()
Mimosa_maguirei.flower.bracteole = new Bracteole()
Mimosa_maguirei.flower.merism = '4-merous'
Mimosa_maguirei.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_maguirei.flower.calyx = new Calyx()
Mimosa_maguirei.flower.corolla = new Corolla()
Mimosa_maguirei.flower.corolla.shape = 'funnelform'

Mimosa_maguirei.androecium = new Androecium()
Mimosa_maguirei.androecium.filaments = new Filaments()
Mimosa_maguirei.androecium.filaments.colour = 'pinkish'

Mimosa_maguirei.ginoecium = new Ginoecium()
Mimosa_maguirei.ginoecium.ovary = new Ovary()

Mimosa_maguirei.fruit = new Fruit()
Mimosa_maguirei.fruit.stipe = new Stipe()
Mimosa_maguirei.fruit.replum = new Replum()
Mimosa_maguirei.fruit.epicarp = new Epicarp()

Mimosa_maguirei.seed = new Seed()


// Description authorship
Mimosa_maguirei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_maguirei.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa maguirei
export { Mimosa_maguirei }