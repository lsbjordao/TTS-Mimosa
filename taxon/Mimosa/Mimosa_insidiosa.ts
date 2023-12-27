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


// Description of Mimosa insidiosa
const Mimosa_insidiosa = new Mimosa()
Mimosa_insidiosa.specificEpithet = 'insidiosa'

Mimosa_insidiosa.stems = new Stems()

Mimosa_insidiosa.stipule = new Stipule()
Mimosa_insidiosa.stipule.margin = new MarginStipule()
Mimosa_insidiosa.stipule.adaxial = new AdaxialStipule()
Mimosa_insidiosa.stipule.abaxial = new AbaxialStipule()

Mimosa_insidiosa.leaf = new Leaf()
Mimosa_insidiosa.leaf.petiole = new Petiole()
Mimosa_insidiosa.leaf.bipinnate = new Bipinnate()
Mimosa_insidiosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_insidiosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_insidiosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_insidiosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_insidiosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_insidiosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 10)
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_insidiosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_insidiosa.inflorescence = new Inflorescence()
Mimosa_insidiosa.inflorescence.peduncle = new Peduncle()
Mimosa_insidiosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_insidiosa.flower = new Flower()
Mimosa_insidiosa.flower.bracteole = new Bracteole()
Mimosa_insidiosa.flower.merism = '4-merous'
Mimosa_insidiosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_insidiosa.flower.calyx = new Calyx()
Mimosa_insidiosa.flower.corolla = new Corolla()
Mimosa_insidiosa.flower.corolla.shape = 'funnelform'

Mimosa_insidiosa.androecium = new Androecium()
Mimosa_insidiosa.androecium.filaments = new Filaments()
Mimosa_insidiosa.androecium.filaments.colour = 'pinkish'

Mimosa_insidiosa.ginoecium = new Ginoecium()
Mimosa_insidiosa.ginoecium.ovary = new Ovary()

Mimosa_insidiosa.fruit = new Fruit()
Mimosa_insidiosa.fruit.stipe = new Stipe()
Mimosa_insidiosa.fruit.replum = new Replum()
Mimosa_insidiosa.fruit.epicarp = new Epicarp()

Mimosa_insidiosa.seed = new Seed()


// Description authorship
Mimosa_insidiosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_insidiosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa insidiosa
export { Mimosa_insidiosa }