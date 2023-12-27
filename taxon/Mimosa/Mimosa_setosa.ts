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


// Description of Mimosa setosa
const Mimosa_setosa = new Mimosa()
Mimosa_setosa.specificEpithet = 'setosa'

Mimosa_setosa.stems = new Stems()

Mimosa_setosa.stipule = new Stipule()
Mimosa_setosa.stipule.margin = new MarginStipule()
Mimosa_setosa.stipule.adaxial = new AdaxialStipule()
Mimosa_setosa.stipule.abaxial = new AbaxialStipule()

Mimosa_setosa.leaf = new Leaf()
Mimosa_setosa.leaf.petiole = new Petiole()
Mimosa_setosa.leaf.bipinnate = new Bipinnate()
Mimosa_setosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_setosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_setosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_setosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(4)
Mimosa_setosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 21)
Mimosa_setosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(24)
Mimosa_setosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_setosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_setosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_setosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_setosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_setosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_setosa.inflorescence = new Inflorescence()
Mimosa_setosa.inflorescence.peduncle = new Peduncle()
Mimosa_setosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_setosa.flower = new Flower()
Mimosa_setosa.flower.bracteole = new Bracteole()
Mimosa_setosa.flower.merism = '4-merous'
Mimosa_setosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_setosa.flower.calyx = new Calyx()
Mimosa_setosa.flower.corolla = new Corolla()
Mimosa_setosa.flower.corolla.shape = 'funnelform'

Mimosa_setosa.androecium = new Androecium()
Mimosa_setosa.androecium.filaments = new Filaments()
Mimosa_setosa.androecium.filaments.colour = 'pinkish'

Mimosa_setosa.ginoecium = new Ginoecium()
Mimosa_setosa.ginoecium.ovary = new Ovary()

Mimosa_setosa.fruit = new Fruit()
Mimosa_setosa.fruit.stipe = new Stipe()
Mimosa_setosa.fruit.replum = new Replum()
Mimosa_setosa.fruit.epicarp = new Epicarp()

Mimosa_setosa.seed = new Seed()


// Description authorship
Mimosa_setosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_setosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa setosa
export { Mimosa_setosa }