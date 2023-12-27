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


// Description of Mimosa velloziana
const Mimosa_velloziana = new Mimosa()
Mimosa_velloziana.specificEpithet = 'velloziana'

Mimosa_velloziana.stems = new Stems()

Mimosa_velloziana.stipule = new Stipule()
Mimosa_velloziana.stipule.margin = new MarginStipule()
Mimosa_velloziana.stipule.adaxial = new AdaxialStipule()
Mimosa_velloziana.stipule.abaxial = new AbaxialStipule()

Mimosa_velloziana.leaf = new Leaf()
Mimosa_velloziana.leaf.petiole = new Petiole()
Mimosa_velloziana.leaf.bipinnate = new Bipinnate()
Mimosa_velloziana.leaf.bipinnate.rachis = new Rachis()
Mimosa_velloziana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_velloziana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_velloziana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_velloziana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_velloziana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 18)
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(21)
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_velloziana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_velloziana.inflorescence = new Inflorescence()
Mimosa_velloziana.inflorescence.peduncle = new Peduncle()
Mimosa_velloziana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_velloziana.flower = new Flower()
Mimosa_velloziana.flower.bracteole = new Bracteole()
Mimosa_velloziana.flower.merism = '4-merous'
Mimosa_velloziana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_velloziana.flower.calyx = new Calyx()
Mimosa_velloziana.flower.corolla = new Corolla()
Mimosa_velloziana.flower.corolla.shape = 'funnelform'

Mimosa_velloziana.androecium = new Androecium()
Mimosa_velloziana.androecium.filaments = new Filaments()
Mimosa_velloziana.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_velloziana.ginoecium = new Ginoecium()
Mimosa_velloziana.ginoecium.ovary = new Ovary()

Mimosa_velloziana.fruit = new Fruit()
Mimosa_velloziana.fruit.stipe = new Stipe()
Mimosa_velloziana.fruit.replum = new Replum()
Mimosa_velloziana.fruit.epicarp = new Epicarp()

Mimosa_velloziana.seed = new Seed()


// Description authorship
Mimosa_velloziana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_velloziana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa velloziana
export { Mimosa_velloziana }