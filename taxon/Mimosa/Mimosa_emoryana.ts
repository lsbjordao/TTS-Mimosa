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


// Description of Mimosa emoryana
const Mimosa_emoryana = new Mimosa()
Mimosa_emoryana.specificEpithet = 'emoryana'

Mimosa_emoryana.stems = new Stems()

Mimosa_emoryana.stipule = new Stipule()
Mimosa_emoryana.stipule.margin = new MarginStipule()
Mimosa_emoryana.stipule.adaxial = new AdaxialStipule()
Mimosa_emoryana.stipule.abaxial = new AbaxialStipule()

Mimosa_emoryana.leaf = new Leaf()
Mimosa_emoryana.leaf.petiole = new Petiole()
Mimosa_emoryana.leaf.bipinnate = new Bipinnate()
Mimosa_emoryana.leaf.bipinnate.rachis = new Rachis()
Mimosa_emoryana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_emoryana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_emoryana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_emoryana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(3)
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 7)
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_emoryana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_emoryana.inflorescence = new Inflorescence()
Mimosa_emoryana.inflorescence.peduncle = new Peduncle()
Mimosa_emoryana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_emoryana.flower = new Flower()
Mimosa_emoryana.flower.bracteole = new Bracteole()
Mimosa_emoryana.flower.merism = '5-merous'
Mimosa_emoryana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_emoryana.flower.calyx = new Calyx()
Mimosa_emoryana.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_emoryana.flower.corolla = new Corolla()
Mimosa_emoryana.flower.corolla.shape = 'vase-shaped'

Mimosa_emoryana.androecium = new Androecium()
Mimosa_emoryana.androecium.filaments = new Filaments()
Mimosa_emoryana.androecium.filaments.colour = 'pinkish'

Mimosa_emoryana.ginoecium = new Ginoecium()
Mimosa_emoryana.ginoecium.ovary = new Ovary()

Mimosa_emoryana.fruit = new Fruit()
Mimosa_emoryana.fruit.stipe = new Stipe()
Mimosa_emoryana.fruit.replum = new Replum()
Mimosa_emoryana.fruit.epicarp = new Epicarp()

Mimosa_emoryana.seed = new Seed()


// Description authorship
Mimosa_emoryana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_emoryana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa emoryana
export { Mimosa_emoryana }