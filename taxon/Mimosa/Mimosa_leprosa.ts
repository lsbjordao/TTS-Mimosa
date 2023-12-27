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


// Description of Mimosa leprosa
const Mimosa_leprosa = new Mimosa()
Mimosa_leprosa.specificEpithet = 'leprosa'

Mimosa_leprosa.stems = new Stems()

Mimosa_leprosa.stipule = new Stipule()
Mimosa_leprosa.stipule.margin = new MarginStipule()
Mimosa_leprosa.stipule.adaxial = new AdaxialStipule()
Mimosa_leprosa.stipule.abaxial = new AbaxialStipule()

Mimosa_leprosa.leaf = new Leaf()
Mimosa_leprosa.leaf.petiole = new Petiole()
Mimosa_leprosa.leaf.bipinnate = new Bipinnate()
Mimosa_leprosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_leprosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leprosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leprosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_leprosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(3)
Mimosa_leprosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leprosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leprosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leprosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leprosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leprosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leprosa.inflorescence = new Inflorescence()
Mimosa_leprosa.inflorescence.peduncle = new Peduncle()
Mimosa_leprosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leprosa.flower = new Flower()
Mimosa_leprosa.flower.bracteole = new Bracteole()
Mimosa_leprosa.flower.merism = '4-merous'
Mimosa_leprosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_leprosa.flower.calyx = new Calyx()
Mimosa_leprosa.flower.calyx.shape = 'campanulate'
Mimosa_leprosa.flower.corolla = new Corolla()

Mimosa_leprosa.androecium = new Androecium()
Mimosa_leprosa.androecium.filaments = new Filaments()
Mimosa_leprosa.androecium.filaments.colour = 'yellowish'

Mimosa_leprosa.ginoecium = new Ginoecium()
Mimosa_leprosa.ginoecium.ovary = new Ovary()

Mimosa_leprosa.fruit = new Fruit()
Mimosa_leprosa.fruit.stipe = new Stipe()
Mimosa_leprosa.fruit.replum = new Replum()
Mimosa_leprosa.fruit.epicarp = new Epicarp()

Mimosa_leprosa.seed = new Seed()


// Description authorship
Mimosa_leprosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leprosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa leprosa
export { Mimosa_leprosa }